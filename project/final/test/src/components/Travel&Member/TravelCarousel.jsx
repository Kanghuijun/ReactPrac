import Slider from "react-slick";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiGet } from "../../api/fetch";
import "../../styles/travel.css";

export default function TravelCarousel() {
  const [items, setItems] = useState([]); // 여행지 데이터 저장 상태
  const navigate = useNavigate();

  useEffect(() => {
    apiGet("semester")
      .then((data) => {
        console.log("불러온 travel data:", data);
        setItems(data); // 받아온 데이터를 상태에 저장
      })
      .catch((err) => console.error("데이터 불러오기 실패:", err));
  }, []);

  // react-slick 슬라이더 설정
  const settings = {
    dots: true,          // 슬라이더 하단 점 네비게이션 표시
    infinite: true,      // 무한 반복 슬라이드
    speed: 500,          // 전환 속도
    slidesToShow: 2,     // 한 화면에 보여줄 슬라이드 개수
    slidesToScroll: 1,   // 한 번에 이동할 슬라이드 개수
    autoplay: true,      // 자동 재생 활성화
    autoplaySpeed: 4000, // 자동 재생 간격
  };

  // 데이터 없거나 로딩 중일 때 보여줄 메시지
  if (!items.length) return <p>로딩 중 혹은 데이터 없음</p>;

  return (
    <div className="carousel-container">
      <h2>추천 여행지 ✈️</h2>
      <Slider {...settings}>
        {items.map((item) => (
          <div
            key={item.id}
            className="carousel-card"
            onClick={() => navigate(`/intro/${item.id}`)} // 클릭 시 상세 페이지로 이동
          >
            <img
              src={item.imageUrl || "https://placehold.co/600x400?text=No+Image"}
              alt={item.title || "이미지 없음"}
              className="carousel-image"
              onError={(e) => {
                // 이미지 로드 실패 시 대체 이미지 설정
                e.target.onerror = null;
                e.target.src = "https://placehold.co/600x400?text=No+Image";
              }}
            />
            <div className="carousel-text">
              <h3>{item.title || "제목 없음"}</h3>
              <p>{item.description || "설명 없음"}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
