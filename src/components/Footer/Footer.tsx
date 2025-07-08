import { useTranslation } from "react-i18next";

import { FooterWrapper } from "./Footer.style";

const Footer = () => {
  const { t } = useTranslation("components");

  const links = [
    {
      text: "Github",
      url: "https://github.com/marclopezsoler/notiflow",
    },
    {
      text: "npm",
      url: "https://www.npmjs.com/package/notiflow",
    },
  ];

  return (
    <FooterWrapper>
      <div>
        {links.map((l) => (
          <a href={l.url} target="_blank">
            {l.text}
          </a>
        ))}
      </div>
      <p>
        {t("components:footer:credits")}{" "}
        <a href="marclopez.xyz" target="_blank">
          Marc López
        </a>
      </p>
    </FooterWrapper>
  );
};

export default Footer;
