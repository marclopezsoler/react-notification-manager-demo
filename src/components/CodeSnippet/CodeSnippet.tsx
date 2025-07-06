import { useState } from "react";

import { IconCheck, IconCopy, IconX } from "@tabler/icons-react";
import { useNotifications } from "marc-react-notification-manager";
import { useTranslation } from "react-i18next";

import { CodeSnippetWrapper } from "./CodeSnippet.style";

const CodeSnippet = ({
  text,
  title = "js",
  copy = false,
}: {
  text: string;
  title?: string;
  copy?: boolean;
}) => {
  const { notify } = useNotifications();
  const { t } = useTranslation("components");

  const [copyStatus, setcopyStatus] = useState<boolean | undefined>(undefined);

  const [buttonText, setButtonText] = useState<string>(t("codeSnippet.copy"));

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(text);

      setButtonText(t("codeSnippet.shortCopy"));
      setcopyStatus(true);

      notify({
        message: t("codeSnippet.copied"),
        canClose: false,
        duration: 3000,
        type: "success",
        colored: "border",
        hasIcon: true,
      });
    } catch (error) {
      console.error(error);
      setButtonText(t("codeSnippet.shortError"));
      setcopyStatus(false);

      notify({
        message: t("codeSnippet.error"),
        canClose: true,
        type: "error",
      });
    }

    setTimeout(() => {
      setButtonText(t("codeSnippet.copy"));
      setcopyStatus(undefined);
    }, 3000);
  };

  return (
    <CodeSnippetWrapper
      $clickable={copy ? true : false}
      $copyStatus={copyStatus}
    >
      <div className="snippet-header">
        <span>{title}</span>
        <button
          onClick={copy && copyStatus === undefined ? copyText : undefined}
          className="copy-button"
        >
          {copyStatus === true ? (
            <IconCheck size={12} />
          ) : copyStatus === false ? (
            <IconX size={12} />
          ) : (
            <IconCopy size={12} />
          )}
          {buttonText}
        </button>
      </div>
      <div className="snippet-content">{text}</div>
    </CodeSnippetWrapper>
  );
};

export default CodeSnippet;
