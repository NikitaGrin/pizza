function Button({ children, type = "small", onClick = function () {} }) {
  const base =
    "rounded-xl font-medium uppercase transition-all hover:bg-yellow-300 ";
  const styles = {
    small: base + "bg-yellow-400 text-sm px-3 py-2",
    big: base + "bg-yellow-400 px-4 py-2 sm:px-6 sm:py-4",
    bigSecondary: base + "border px-4 py-2 sm:px-6 sm:py-4",
    round: base + "bg-yellow-400 px-3 py-1 rounded-full",
  };

  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
