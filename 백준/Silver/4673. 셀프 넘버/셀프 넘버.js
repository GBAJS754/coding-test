const arr = Array.from({ length: 10000 }, () => 0);

for (let i = 1; i <= 10000; i++) {
  const sum = Number(
    String(i)
      .split("")
      .reduce((acc, curr) => Number(acc) + Number(curr))
  );

  arr[sum + i] = 1;
}
arr.map((v, index) => {
  if (v === 0 && index !== 0) {
    console.log(index);
  }
});