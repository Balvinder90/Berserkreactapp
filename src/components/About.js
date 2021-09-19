import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <section className="about">
        <h4>What is Berserk?</h4>
        <p>
          Born from the corpse of his mother, a young mercenary known only as
          Guts embraces the battlefield as his only means of survival. Day in
          and day out, putting his life on the line just to make enough to get
          by, he moves from one bloodshed to the next.
        </p>
        <p>
          After a run-in with the Band of the Hawk, a formidable troop of
          mercenaries, Guts is recruited by their charismatic leader Griffith,
          nicknamed the "White Hawk." As he quickly climbed the ranks in order
          to become the head of the offensive faction, Guts proves to be a
          mighty addition to Griffith's force, taking Midland by storm. However,
          while the band's quest for recognition continues, Guts slowly realizes
          that the world is not as black-and-white as he once assumed.
        </p>
        <p>
          Set in the medieval era, Berserk is a dark, gritty tale that follows
          one man's struggle to find his own path, while supporting another's
          lust for power, and the unimaginable tragedy that begins to turn the
          wheels of fate.
        </p>
        <p>
          Created by Kentaro Miura, Berserk is manga mayhem to the extreme --
          violent, horrifying, and mercilessly funny -- and the wellspring for
          the internationally popular anime series. Not for the squeamish or the
          easily offended, Berserk asks for no quarter -- and offers none!
        </p>
        <p>
          One of the most eagerly anticipated manga properties in recent years,
          Berserk was originally published in Japan and has been serialized in
          Young Animal Magazine since the early 1990's.
        </p>
      </section>
      <div className="about__img-container">
        <img
          className="about__img-container-guts"
          src="img/gutsangry.png"
          alt="Guts"
          title="Guts"
        />
      </div>
      <img className="offscreen" src="img/brand.png" alt="Loading" title="Loading"/>
    </>
  );
};

export default About;
