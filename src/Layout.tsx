import { Link, Outlet } from "react-router-dom";
import { HomeContainer } from "./pages/Home/styles";
import { Suspense } from "react";

const Layout = () => {
  return (
    <HomeContainer>
      <div id="center">
        <header>
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1>
                <Link to="/">Bruch Story</Link>
              </h1>
              <label htmlFor="">
                <input type="text" />
                <button>검색</button>
              </label>
            </div>
            <nav className="header-nav">
              <ul>
                <li>
                  <Link to="/books">베스트도서</Link>
                </li>
                <li>
                  <Link to="/books">신간도서</Link>
                </li>
                <li>
                  <Link to="/books">국내도서</Link>
                </li>
                <li>
                  <Link to="/books">외국도서</Link>
                </li>
                <li>
                  <Link to="/order">도서몰/주문</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          {/* 세부경로의 컴포넌트들이 로딩위치 */}
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </HomeContainer>
  );
};

export default Layout;
