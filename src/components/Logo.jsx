import Icon from '@/images/logos/playstore.png'
import Image from 'next/image';

export function Logomark(props) {
  return (
    <Image
      src={Icon}
      alt="Logomark" 
      width="40" 
      height="40" 
      {...props} 
    />
  );
}

export function Logo(props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} {...props}>
      <Logomark />
      <h2 className='font-semibold'>Xinchat</h2>
    </div>
  );
}
