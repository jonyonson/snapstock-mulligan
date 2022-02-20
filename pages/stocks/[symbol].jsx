import { useRouter } from 'next/router';
import Header from '../../components/Header/Header';

function Symbol() {
  const router = useRouter();
  const symbol = router.query.symbol;
  return (
    <div>
      <Header />
      <h1>{symbol}</h1>
    </div>
  );
}

export default Symbol;
