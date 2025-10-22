"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, MotionProps } from "motion/react";
import { cn } from "@/lib/utils";

type CharacterSet = string[] | readonly string[];

interface HyperTextProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
  animateOnHover?: boolean;
  characterSet?: CharacterSet;
}

const DEFAULT_CHARACTER_SET = Object.freeze(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
) as readonly string[];

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export function HyperText({
  children,
  className,
  duration = 800,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  animateOnHover = true,
  characterSet = DEFAULT_CHARACTER_SET,
  ...props
}: HyperTextProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });
  const [displayText, setDisplayText] = useState<string[]>(() =>
    children.split("")
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const iterationCount = useRef(0);
  const elementRef = useRef<HTMLElement>(null);

  const startAnimation = () => {
    iterationCount.current = 0;
    setIsAnimating(true);
  };

  // Hover trigger
  const handleMouseEnter = () => {
    if (animateOnHover) startAnimation();
  };

  // Scroll or delay trigger
  useEffect(() => {
    if (!startOnView) {
      const timer = setTimeout(startAnimation, delay);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(startAnimation, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-30% 0px -30% 0px" }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [delay, startOnView]);

  // Scramble animation
  useEffect(() => {
    if (!isAnimating) return;

    const maxIterations = children.length;
    const startTime = performance.now();
    let frameId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      iterationCount.current = progress * maxIterations;

      setDisplayText((text) =>
        text.map((letter, idx) =>
          letter === " "
            ? letter
            : idx <= iterationCount.current
            ? children[idx]
            : characterSet[getRandomInt(characterSet.length)]
        )
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false); // Animation ends
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isAnimating, children, characterSet, duration]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("overflow-hidden py-2 text-3xl font-bold", className)}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      <AnimatePresence>
        {displayText.map((letter, idx) => (
          <motion.span
            key={idx}
            className={cn(
              "font-mono",
              letter === " " ? "w-3 inline-block" : ""
            )}
          >
            {letter.toUpperCase()}
          </motion.span>
        ))}
      </AnimatePresence>
    </MotionComponent>
  );
}
