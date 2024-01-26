import MainComponent from "./components/MainComponent/MainComponent";
import styles from "./App.module.css";
import { bookmark } from "./images";

//  font-family: "Poppins", sans-serif;
//  font-family: "Inter", sans-serif;
function App() {
  const allData = [
    {
      fontFamily: "'Inter', sans-serif",
      name: "Connor Hamilton",
      link: "@reallygreatsite.com",
      title: "Business Mindset & <br/> <span>Personal Growth</span>",

      background: "#E86404",
    },
    {
      fontFamily: "'Inter', sans-serif",
      name: "Connor Hamilton",
      link: "@reallygreatsite.com",
      title: "The power  <br/> of mindset",
      info: "Your mindset shapes your reality. A positive, growth-oriented mindset opens doors to new opportunities, helps you navigate challenges, and propels your business forward. Let's harness the power of mindset!",
      background: "#E86404",
    },
    {
      fontFamily: "'Inter', sans-serif",
      name: "Connor Hamilton",
      link: "@reallygreatsite.com",
      title: "Embracing  <br/> change",
      info: "Your mindset shapes your reality. A positive, growth-oriented mindset opens doors to new opportunities, helps you navigate challenges, and propels your business forward. Let's harness the power of mindset!",
      background: "#E86404",
    },
    {
      fontFamily: "'Inter', sans-serif",
      name: "Connor Hamilton",
      link: "@reallygreatsite.com",
      title: "Overcoming  <br/> self-doubt",
      info: "Your mindset shapes your reality. A positive, growth-oriented mindset opens doors to new opportunities, helps you navigate challenges, and propels your business forward. Let's harness the power of mindset!",
      background: "#E86404",
    },
    {
      fontFamily: "'Inter', sans-serif",
      name: "Connor Hamilton",
      link: "@reallygreatsite.com",
      title: "Was this?  <br/> helpful",
      subtitle: "Don't foget to <br/> save this post",
      bookmarkIcon: bookmark,
      background: "#E86404",
    },
  ];
  return (
    <div className={styles.wrapper}>
      {allData.map((el, i) => (
        <MainComponent {...el} key={i} totalData={allData.length - 1} id={i} />
      ))}
    </div>
  );
}

export default App;
