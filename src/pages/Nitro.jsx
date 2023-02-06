import React from "react";
import Button from "../components/UI/Button";
import Head from "../components/UI/Head";
import Card from "../components/UI/Card";
const Nitro = () => {
  return (
    <div className="w-full sm:ml-[11rem] ">
      <Head>
        <h1 className="text-white">Nitro</h1>
      </Head>
      <section className="mt-[2.5rem] p-4 bg-[#163ca59c] grid place-content-center">
        <h1 className="text-center">Unleash more fun with nitro</h1>
        <h4 className="text-center">
          Plans start at only Us$2.99/month.Cancel at any time
        </h4>
        <div className="m-auto">
          <Button className="bg-white text-[#5343ca]">Subscribe</Button>
          <Button className="border-white border-2 text-white">
            Gift Nitro
          </Button>
        </div>
        <div className=" flex flex-wrap">
          <Card className="border-white border-2 h-[21rem]  relative  ">
            <div>
              <h1>Nitro</h1>
              <h2>basic</h2>
              <h2>US$2.99 /month</h2>
              <p>50 MB uploads</p>
              <p>Custom emojis anywhere</p>
              <p>Special Nitro badge on your profile</p>
            </div>
            <Button className="bg-white text-[#5343ca] mt-[5.5rem] ">
              Subscribe
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Nitro;
