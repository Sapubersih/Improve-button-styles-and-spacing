type Props = {
  label: string;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
};

const Button = ({ label, variant = "primary", onClick }: Props) => {
  const baseStyle = {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    margin: "5px",
    transition: "all 0.2s ease",
  };

  const variants: any = {
    primary: {
      background: "#2563eb",
      color: "#fff",
    },
    secondary: {
      background: "#e5e7eb",
      color: "#111",
    },
    danger: {
      background: "#dc2626",
      color: "#fff",
    },
  };

  return (
    <button
      onClick={onClick}
      style={{
        ...baseStyle,
        ...variants[variant],
      }}
      onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
      onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {label}
    </button>
  );
};

export default Button;
