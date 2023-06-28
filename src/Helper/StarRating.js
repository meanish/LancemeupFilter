import StarIcon from "@mui/icons-material/Star";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import styled from "styled-components";

const StarRating = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <StarIcon className="icon" />
        ) : stars >= number ? (
          <StarHalfOutlinedIcon className="icon" />
        ) : (
          <StarBorderIcon className="icon" />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="icon-style">
        {ratingStar}
        <p>
          ({reviews} <span>customer reviews</span>)
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
    .icon {
      font-size: 2rem;
      color: orange;
    }
    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
      span {
        font-size: 10px;
      }
    }
  }
`;

export default StarRating;
