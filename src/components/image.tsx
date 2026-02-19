interface IProps {
  src: string;
  alt: string;
  className: string;
}

const Image = ({ src, alt, className }: IProps) => {
  return (
    <div>
      <img src={src} alt={alt} className={className} />
    </div>
  );
};

export default Image;
