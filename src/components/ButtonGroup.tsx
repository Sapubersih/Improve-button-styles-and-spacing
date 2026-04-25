const ButtonGroup = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginTop: "10px",
      }}
    >
      {children}
    </div>
  );
};

export default ButtonGroup;
