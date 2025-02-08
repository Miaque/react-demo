import {ReactNode, useContext} from "react";
import {LevelContext} from "./LevelContext.tsx";

export default function Section({children, isFancy}: { children: ReactNode, isFancy?: boolean }) {
  const level = useContext(LevelContext)

  return (
    <>
      <section className={'section ' + isFancy ? 'fancy' : ''}>
        <LevelContext.Provider value={level + 1}>
          {children}
        </LevelContext.Provider>
      </section>
    </>
  );
}
