'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Switch } from "@heroui/react";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-11 h-6 rounded-full bg-[var(--muted)] border border-[var(--border)]" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Switch
      isSelected={isDark}
      onChange={() => setTheme(isDark ? "light" : "dark")}
      size="lg"
      aria-label="Toggle theme"
    >
      {({ isSelected }) => (
        <Switch.Content>
          <Switch.Control
            className={
              isSelected
                ? "bg-gradient-to-r from-[#6366f1] to-[#ec4899]"  // Nebula Forge
                : "bg-muted"
            }
          >
            <Switch.Thumb>
              <Switch.Icon>
                {isSelected ? (
                  <Moon className="size-3.5 text-inherit opacity-100" />
                ) : (
                  <Sun className="size-3.5 text-inherit opacity-70" />
                )}
              </Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </Switch.Content>
      )}
    </Switch>
  );
}