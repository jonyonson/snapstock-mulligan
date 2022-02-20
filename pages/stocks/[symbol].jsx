import { useRouter } from 'next/router';

function Symbol() {
  const router = useRouter();
  const symbol = router.query.symbol;
  return (
    <div>
      <h1>{symbol}</h1>
    </div>
  );
}

export default Symbol;
