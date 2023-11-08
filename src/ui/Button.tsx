function Button({
  children,
  type = "small",
  onClick = function () {},
}: {
  children: any;
  type?: string;
  onClick?: any;
}) {
  const base =
    "rounded-xl font-medium uppercase transition-all hover:bg-yellow-300 ";
  const styles: any = {
    small: base + "bg-yellow-400 text-sm px-3 py-2",
    big: base + "bg-yellow-400 px-6 py-4",
    bigSecondary: base + "border px-6 py-4",
    round: base + "bg-yellow-400 px-3 py-1 rounded-full",
  };

  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
