import Header from "../components/Header";

const Author = () => {
  return (
    <>
      <Header />
      <section className="author">
        <h4>Kentaro Miura</h4>
        <p>
          Kentaro Miura (July 11, 1966 – May 6, 2021) was a Japanese manga
          artist. He was best known for his acclaimed dark fantasy manga
          Berserk, which began serialization in 1989 and continued until his
          death. As of May 2021, Berserk had over 50 million copies in
          circulation, making it one of the best-selling manga series of all
          time. In 2002, Miura received the Tezuka Osamu Cultural Prize.
        </p>
        <div className="author__ken">
          <img src="img/miura.jpg" alt="Kentaro Miura" title="Kentaro miura" />
        </div>
        <hr className="author__divider"></hr>
        <h4>Career</h4>
        <p>
          While in high school in 1982, Miura enrolled in an artistic
          curriculum, where he and his classmates started publishing their works
          in school booklets. His first doujinshi was published in a magazine,
          with the help of friends, in the same year. At age 18, Miura worked as
          an assistant to George Morikawa, of Hajime no Ippo fame. Morikawa
          quickly acknowledged Miura's high artistic level and dismissed him,
          saying there was nothing he could teach that Miura did not already
          know.
        </p>
        <p>
          In 1985, Miura applied for the entrance examination to the art college
          of Nihon University. He submitted his project Futanabi for examination
          and was granted admission. The project later earned him a nomination
          as Best New Author in Weekly Shonen Magazine. Miura's first serialized
          work, Noa, was published in the magazine, but it was not successful.
          In 1988, while working for Buronson on a project titled Oro (??, lit.
          "King of Wolves"), Miura published a prototype of Berserk in
          Hakusensha's Gekkan ComiComi. This 48-page prototype placed second at
          the 7th ComiComi's Manga-School prize.
        </p>
        <p>
          The full serialization of Berserk, ultimately Miura's most famous and
          successful work, began in Hakusensha's Monthly Animal House in 1989.
          In 1990, a prequel to Oro entitled Oro Den (???, The Legend of the
          Wolf King) was published in the magazine. In 1992, Monthly Animal
          House was renamed Young Animal, where Berserk continued serialization.
          In the same year, Miura collaborated with Buronson on Japan, also
          published in Young Animal.
        </p>
        <p>
          In 1997, Miura supervised the production of a 25-episode anime
          adaptation of Berserk produced by OLM, Inc., which aired in the same
          year on NTV. Various art books and supplemental materials by Miura
          based on Berserk were also released. In 1999, Miura made contributions
          to the Dreamcast video game Sword of the Berserk: Guts' Rage,
          including co-writing the story's plot. 2004 saw the release of yet
          another video game adaptation entitled Berserk Millennium Falcon Arc:
          Chapter of the Holy Demon War, which Miura also helped to write. In
          2013, Miura released the short standalone manga Gigantomakhia, which
          was released into English speaking territories as Giganto Maxia by the
          publisher Dark Horse in 2016.
        </p>
        <p>
          As of 2018, Berserk has been collected in 40 tankobon volumes, and had
          over 50 million copies in circulation worldwide, including digital
          versions, as of May 2021. The series also spawned a host of
          merchandise, both official and fan-made, ranging from statues, action
          figures to key rings, video games, and a trading card game. In 2002,
          Miura received the second place in the Tezuka Osamu Cultural Prize of
          Excellence for Berserk.
        </p>
        <hr className="author__divider"></hr>
        <h4>Death</h4>
        <p>
          On May 20, 2021, Hakusensha announced that Miura had died on May 6,
          2021, due to an acute aortic dissection. A private ceremony was held
          by his family.
        </p>
        <div className="author__tribute">
          <h2>RIP KENTARO MIURA</h2>
          <h2>1966-2021</h2>
          <img
            className="author__guts"
            src="img/tribute.png"
            alt="RIP KENTARO MIURA 1966-2021"
            title="RIP KENTARO MIURA 1966-2021"
          />
        </div>
      </section>
    </>
  );
};

export default Author;
