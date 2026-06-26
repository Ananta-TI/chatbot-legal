function RevealButton({
  children,
  href,
  to,
  variant = "secondary",
  size = "md",
  className = "",
}) {
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  const variants = {
    primary: {
      wrapper:
        "border-brand-accent bg-transparent text-brand-accent hover:border-brand-accent",
      circle: "bg-brand-accent",
      initialText: "var(--color-brand-accent)",
      hoverText: "var(--color-brand-bg)",
      classText: "text-brand-accent",
    },
    secondary: {
      wrapper:
        "border-brand-text/35 bg-transparent text-brand-text hover:border-brand-text/65",
      circle: "bg-brand-text",
      initialText: "var(--color-brand-text)",
      hoverText: "var(--color-brand-bg)",
      classText: "text-brand-text",
    },
    ghost: {
      wrapper:
        "border-brand-border bg-brand-surface/20 text-brand-text hover:border-brand-accent",
      circle: "bg-brand-accent",
      initialText: "var(--color-brand-text)",
      hoverText: "var(--color-brand-bg)",
      classText: "text-brand-text",
    },
  };
}