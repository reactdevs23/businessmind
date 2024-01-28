import MainComponent from "./components/MainComponent/MainComponent";
import styles from "./App.module.css";
import { bookmark, img } from "./images";

//  font-family: "Poppins", sans-serif;
//  font-family: "Inter", sans-serif;
function App() {
  const allData = {
    fontFamily: "'Inter', sans-serif",
    primaryColor: "#ddd",
    secondaryColor: "#fff",
    background: "#E86404",
    data: [
      {
        name: "Connor Hamilton",

        title: "Business Mindset & <br/> <span>Personal Growth</span>",
        img: img,
      },
      {
        name: "Connor Hamilton",

        title: "The power  <br/> of mindset",
        info: "Your mindset shapes your reality. A positive, growth-oriented mindset opens doors to new opportunities, helps you navigate challenges, and propels your business forward. Let's harness the power of mindset!",
        img: img,
      },
      {
        name: "Connor Hamilton",

        title: "Embracing  <br/> change",
        info: "Your mindset shapes your reality. A positive, growth-oriented mindset opens doors to new opportunities, helps you navigate challenges, and propels your business forward. Let's harness the power of mindset!",
        img: img,
      },
      {
        name: "Connor Hamilton",

        title: "Overcoming  <br/> self-doubt",
        info: "Your mindset shapes your reality. A positive, growth-oriented mindset opens doors to new opportunities, helps you navigate challenges, and propels your business forward. Let's harness the power of mindset!",
        img: img,
      },
      {
        name: "Connor Hamilton",

        title: "Was this?  <br/> helpful",
        subtitle: "Don't foget to <br/> save this post",
        bookmarkIcon: bookmark,
        img: img,
      },
    ],
  };
  return (
    <div className={styles.wrapper}>
      {allData.data.map((el, i) => (
        <MainComponent
          {...el}
          key={i}
          totalData={allData.data.length}
          id={i + 1}
          fontFamily={allData.fontFamily}
          primaryColor={allData.primaryColor}
          secondaryColor={allData.secondaryColor}
          background={allData.background}
        />
      ))}
    </div>
  );
}

export default App;
