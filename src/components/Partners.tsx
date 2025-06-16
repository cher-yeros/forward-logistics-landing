import React from "react";

interface Partner {
  id: number;
  image: string;
  alt: string;
}

export default function Partners() {
  // Array of partner logos (replace with actual partner images)
  const partners: Partner[] = [
    {
      id: 1,
      image:
        "https://matrix360erpdevusermanagement.matrix360erpdev.com:2443/images/logo/company-logo3.png",
      alt: "Partner 1",
    },
    {
      id: 2,
      image:
        "https://organizationallogos.s3.us-west-2.amazonaws.com/111931e1-8764-4e6f-a106-32c964a715ff.png",
      alt: "Partner 2",
    },
    {
      id: 3,
      image:
        "https://matrix360erpdevusermanagement.matrix360erpdev.com:2443/images/logo/company-logo3.png",
      alt: "Partner 3",
    },
    {
      id: 4,
      image:
        "https://matrix360erpdevusermanagement.matrix360erpdev.com:2443/images/logo/company-logo3.png",
      alt: "Partner 4",
    },
    {
      id: 5,
      image:
        "https://matrix360erpdevusermanagement.matrix360erpdev.com:2443/images/logo/company-logo3.png",
      alt: "Partner 5",
    },
    {
      id: 6,
      image:
        "https://matrix360erpdevusermanagement.matrix360erpdev.com:2443/images/logo/company-logo3.png",
      alt: "Partner 6",
    },
    {
      id: 7,
      image:
        "https://matrix360erpdevusermanagement.matrix360erpdev.com:2443/images/logo/company-logo3.png",
      alt: "Partner 7",
    },
    {
      id: 8,
      image:
        "https://matrix360erpdevusermanagement.matrix360erpdev.com:2443/images/logo/company-logo3.png",
      alt: "Partner 8",
    },
  ];

  // Render a track of partners
  const renderPartnerTrack = (
    partners: Partner[],
    reverse = false,
    delay = 200
  ) => {
    const partnersToRender = reverse ? [...partners].reverse() : partners;

    return (
      <div
        className={`clients-track ${
          reverse ? "track-2" : "track-1"
        } aos-init aos-animate`}
        data-aos={reverse ? "fade-left" : "fade-right"}
        data-aos-delay={delay}
      >
        {/* Original set */}
        {partnersToRender.map((partner) => (
          <div className="clients-slide" key={`original-${partner.id}`}>
            <img src={partner.image} className="img-fluid" alt={partner.alt} />
          </div>
        ))}

        {/* Duplicate for seamless looping */}
        {partnersToRender.map((partner) => (
          <div className="clients-slide" key={`duplicate-${partner.id}`}>
            <img src={partner.image} className="img-fluid" alt={partner.alt} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="clients" className="clients section gray-background">
      <div
        className="container section-title aos-init aos-animate"
        data-aos="fade-up"
      >
        <h2>Partners</h2>
        <p>Our Partners</p>
      </div>

      <div
        className="container-fluid aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="clients-slider">
          {renderPartnerTrack(partners, false, 200)}
        </div>

        <div className="clients-slider">
          {renderPartnerTrack(partners, true, 300)}
        </div>
      </div>
    </section>
  );
}
