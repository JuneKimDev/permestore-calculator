import { useEffect } from 'react';
import Meta from '../components/meta';
import MainFrame from '../components/mainFrame';
import CalcPrice from '../components/calcPrice';
import Footer from '../components/footer';

const page = () => {
  const publicUrl = process.env.PUBLIC_URL || 'localhost:3000';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta
        title="Permestore price calculator | JuneKimDev"
        desc="Permestore price calculator created by JuneKimDev"
        url={publicUrl}
      />
      <MainFrame>
        <CalcPrice />
        <Footer />
      </MainFrame>
    </>
  );
};

export default page;
