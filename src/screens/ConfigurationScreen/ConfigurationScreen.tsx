import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";
import CodeSnippet from "../../components/CodeSnippet/CodeSnippet";

import ConfigurationData from "../../data/content/configuration";

import { routes } from "../../navigation/routes";

import { ConfigurationScreenWrapper } from "./ConfigurationScreen.style";

const ConfigurationScreen = () => {
  const { ConfigurationDataPage } = ConfigurationData();
  const navigate = useNavigate();

  return (
    <ConfigurationScreenWrapper>
      <h1>{ConfigurationDataPage.title}</h1>
      <h2>{ConfigurationDataPage.description}</h2>
      <div className="screen-content">
        {ConfigurationDataPage.sections.map((s, index) => (
          <div className="section">
            {s.title && <span className="title">{s.title}</span>}
            {s.description && <p className="description">{s.description}</p>}
            {s.command && (
              <CodeSnippet
                key={index}
                text={s.command}
                title={s.commandTitle}
                copy
              />
            )}
            {s.note && <p className="note">{s.note}</p>}
          </div>
        ))}
      </div>
      <Button
        label={ConfigurationDataPage.button}
        onClick={() => navigate(routes.examples)}
        variant={0}
      />
    </ConfigurationScreenWrapper>
  );
};

export default ConfigurationScreen;
