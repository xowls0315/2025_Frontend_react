import Match from "./Match";

function App() {
  const matchData = [
    {
      date: "04.12",
      day: "(토)",
      time: "16:30",
      homeLogo:
        "http://image.toast.com/aaaaab/ticketlink/TKL_5/Soccer_KL1_Seoul.png",
      awayLogo: "http://image.toast.com/aaaaab/ticketlink/TKL_3/Daejeon.png",
      game: "FC서울 vs 대전",
      ground: "서울월드컵경기장",
      openDate: "2025.04.07 (월)",
      openTime: "18:00 오픈예정",
    },
    {
      date: "04.20",
      day: "(일)",
      time: "14:00",
      homeLogo:
        "http://image.toast.com/aaaaab/ticketlink/TKL_5/Soccer_KL1_Seoul.png",
      awayLogo: "http://image.toast.com/aaaaab/ticketlink/TKL_1/Gwangju_02.png",
      game: "FC서울 vs 광주FC",
      ground: "서울월드컵경기장",
      openDate: "2025.04.15 (월)",
      openTime: "18:00 오픈예정",
    },
    {
      date: "05.03",
      day: "(토)",
      time: "19:00",
      homeLogo:
        "http://image.toast.com/aaaaab/ticketlink/TKL_5/Soccer_KL1_Seoul.png",
      awayLogo:
        "http://image.toast.com/aaaaab/ticketlink/TKL_8/new_Jeonbuk.png",
      game: "FC서울 vs 전북현대",
      ground: "서울월드컵경기장",
      openDate: "2025.04.28 (월)",
      openTime: "18:00 오픈예정",
    },
    {
      date: "05.24",
      day: "(토)",
      time: "16:30",
      homeLogo:
        "http://image.toast.com/aaaaab/ticketlink/TKL_5/Soccer_KL1_Seoul.png",
      awayLogo: "http://image.toast.com/aaaaab/ticketlink/TKL_3/SuwonFC.png",
      game: "FC서울 vs 수원FC",
      ground: "서울월드컵경기장",
      openDate: "2025.05.19 (월)",
      openTime: "18:00 오픈예정",
    },
    {
      date: "05.31",
      day: "(토)",
      time: "19:00",
      homeLogo:
        "http://image.toast.com/aaaaab/ticketlink/TKL_5/Soccer_KL1_Seoul.png",
      awayLogo:
        "http://image.toast.com/aaaaab/ticketlink/TKL_4/jeju_em_250115.png",
      game: "FC서울 vs 제주",
      ground: "서울월드컵경기장",
      openDate: "2025.05.26 (월)",
      openTime: "18:00 오픈예정",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      {matchData.map((v) => (
        <Match {...v} />
      ))}
    </div>
  );
}

export default App;
