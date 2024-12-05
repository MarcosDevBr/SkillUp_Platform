import { IFilterCardViewProps } from "./FilterCard.model";
import { Container } from "./FilterCard.style";

export default function FilterCardView({
  text = 'card text',
  isSelect,
  onClick
}: IFilterCardViewProps) {
    return (
       <Container isSelect={isSelect} onClick={onClick}>
          <span>
            {text}
          </span>
       </Container>
    );
}
