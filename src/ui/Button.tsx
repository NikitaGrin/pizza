function Button({ children, type }) {
  const base =
    "rounded-xl bg-yellow-400 font-medium uppercase transition-all hover:bg-yellow-300 ";
  const styles = {
    small: base + "text-sm px-3 py-2",
    big: base + "px-6 py-4",
  };

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
