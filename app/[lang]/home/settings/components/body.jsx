import SettingsLayout from "../../components/settings_layout";
import LanguageCard from "./language";
import NotificationCard from "./notification";

export default function BodyCard({ dict, lang }) {
  return (
    <SettingsLayout lang={lang} title={dict.page.settings.title}>
      <div className="space-y-6">
        <LanguageCard dict={dict.page.settings} lang={lang} />
        <hr />
        <NotificationCard dict={dict.page.settings} />
        <hr />
      </div>
    </SettingsLayout>
  );
}
