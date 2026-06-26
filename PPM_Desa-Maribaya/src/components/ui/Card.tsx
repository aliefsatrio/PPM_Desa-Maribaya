interface CardProps {
  title: string;
}

export const Card = ({ title }: CardProps) => {
  return <div>{title}</div>;
};

export default Card;