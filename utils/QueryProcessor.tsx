export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "brenday";
  }

  if (query.toLowerCase().includes("name")) {
    return "brenday";
  }

  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/\d+/g);

    if (numbers) {
      const max = Math.max(...numbers.map(Number));
      return max.toString();
    }
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g);

    if (numbers && numbers.length >= 2) {
      const sum = numbers.map(Number).reduce((a, b) => a + b, 0);
      return sum.toString();
    }
  }

  if (query.toLowerCase().includes("multiplied")) {
    const numbers = query.match(/\d+/g);

    if (numbers && numbers.length >= 2) {
      const multiplication = numbers.map(Number).reduce((a, b) => a * b);
      return multiplication.toString();
    }
  }
  
  if (query.toLowerCase().includes("minus")) {
    const numbers = query.match(/\d+/g);

    if (numbers && numbers.length >= 2) {
      const subtraction = numbers.map(Number).reduce((a, b) => a - b);
      return subtraction.toString();
    }
  }

  if (query.toLowerCase().includes("primes")) {
    const numbers = query.match(/\d+/g);

    if (numbers) {
      const isPrime = (num: number): boolean => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      };

      const primes = numbers
        .map(Number)
        .filter(isPrime);

      return primes.join(", ");
    }
  }

  if (query.toLowerCase().includes("power")) {
    const numbers = query.match(/\d+/g);

    if (numbers && numbers.length >= 2) {
      const base = BigInt(numbers[0]);
      const exponent = BigInt(numbers[1]);

      const result = base ** exponent;
      return result.toString();
    }
  }
  
  // if (query.toLowerCase().includes("square") && query.toLowerCase().includes("cube")) {
  //   const numbers = query.match(/\d+/g);

  //   if (numbers && numbers.length >= 2) {
  //     const sum = numbers.map(Number).reduce((a, b) => a * b);
  //     return sum.toString();
  //   }
  // }
  
  return "";
}
