import { useState, createContext } from "react";
 
const LanguageContext = createContext();
 
 
// CREATE A WRAPPER COMPONENT
function LanguageProviderWrapper(props) {
    const [language, setLanguage] = useState("fr"); // <== ADD

    const languageContent = {
        en: {
            navigationContent: ["Home", "Projects"],
        },
        fr: {
            navigationContent: ["Maison", "Projets"]
        }
    }
 
 
  return (
    <LanguageContext.Provider value={{language, setLanguage, languageContent}}>
        {props.children}
    </LanguageContext.Provider>
  )
}
 
export { LanguageContext, LanguageProviderWrapper };   // <== UPDATE