import { useDog } from "../providers/DogContext";

//! Get rid of all props except 'children' and 'label'
export const Section = ({ label, children }) => {
  const {
    showComponent,
    onClickFavorited,
    favoriteDogCount,
    unfavoriteDogCount,
    onClickCreateDog,
    onClickUnfavorited,
  } = useDog();

  return (
    <section>
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* This should display the favorited count */}
          <div
            className={`selector ${
              showComponent === "favorite-dogs" && "active"
            }`}
            onClick={onClickFavorited}
          >
            favorited ( {favoriteDogCount} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            className={`selector ${
              showComponent === "unfavorite-dogs" && "active"
            }`}
            onClick={onClickUnfavorited}
          >
            unfavorited ( {unfavoriteDogCount} )
          </div>
          <div
            className={`selector ${
              showComponent === "create-dog-form" && "active"
            }`}
            onClick={onClickCreateDog}
          >
            create dog
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};
