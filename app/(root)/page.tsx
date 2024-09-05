import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalance from "@/components/TotalBalanceBox";
import RightSideBar from "@/components/RightSideBar";

function Home() {
  const LoggedIn = { firstName: "Nazbeen", lastName: "usman", email:"Naziru@gmail.com"};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={LoggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transaction effiency"
          />
          <TotalBalance
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12358988.35}
          />
        </header>
        RESENT TRANSACTION
      </div>
      <div className="home-sidebar">
        <RightSideBar 
        user={LoggedIn}
        transctions={[]}
        banks={[{currentBalance: 123.1829}, {currentBalance: 2023.6029}]}
        />
      </div>
    </section>
  );
}

export default Home;
