import { useNotifications } from "marc-react-notification-manager";

import { ExamplesScreenWrapper } from "./ExamplesScreen.style";
import ExamplesData from "../../data/content/examples";
import CodeSnippet from "../../components/CodeSnippet/CodeSnippet";
import Button from "../../components/Button/Button";

const ExamplesScreen = () => {
  const { notify } = useNotifications();

  const { ExamplesDataPage, currentVersion, t } = ExamplesData();

  return (
    <ExamplesScreenWrapper>
      <h1>{ExamplesDataPage.title}</h1>
      <h2>{ExamplesDataPage.description}</h2>
      <div className="snippets">
        {ExamplesDataPage.snippets.map((snip, idx) => (
          <div key={idx} className="snippet">
            <p className="snippet-description" style={{ marginTop: 6 }}>
              {t(`data:content:${currentVersion}:examples:${snip.descKey}`)}
            </p>
            <CodeSnippet text={snip.code} copy />
            <Button
              label={ExamplesDataPage.button}
              onClick={() => notify(snip.params)}
            />
          </div>
        ))}
      </div>
    </ExamplesScreenWrapper>
  );
};

export default ExamplesScreen;
