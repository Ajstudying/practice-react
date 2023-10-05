import { useState } from "react";
import { HomeContainer } from "./styles";

const Home = () => {
  const [bestBooks, setBestBooks] = useState(0);

  return (
    <HomeContainer>
      <div>
        <h1>메인페이지 입니다.</h1>
        <article>
          <div>MD 추천 도서</div>
        </article>
        <section>
          <article>
            <h3>오늘의 글귀</h3>
            <span>
              <h4>저자</h4>
              <h4>책</h4>
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              perspiciatis, dolor pariatur nihil suscipit ut atque modi
              provident excepturi tenetur. Vel labore officiis aliquid corporis
              voluptatum laborum quibusdam magni dolores.
            </p>
          </article>
          <article>
            <h3>베스트셀러</h3>
            <ul>
              <div>
                <li>책1</li>
                <li>책2</li>
                <li>책3</li>
                <li>책4</li>
              </div>
              <div>
                <li>책5</li>
                <li>책6</li>
                <li>책7</li>
                <li>책8</li>
              </div>
            </ul>
          </article>
        </section>
      </div>
    </HomeContainer>
  );
};

export default Home;
