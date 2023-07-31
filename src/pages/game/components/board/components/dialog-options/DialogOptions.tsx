import { connect } from "react-redux";
import { GameLocation } from "../../../../../../gameLocations/gameLocation";
import { GameLocationsList } from "../../../../../../gameLocations/gameLocationsList";
import { Place } from "../../../../../../gameLocations/places/place";
import { DialogOption } from "../../../../../../scenarios/dialog-option";
import { TypeOfAction } from "../../../../../../scenarios/type-of-action.enum";
import {
  changeGameLocation,
  changePlace,
} from "../../../../../../store/gameLocation/gameLocationActionCreators";
import { subtractEnergy } from "../../../../../../store/hero/heroActionCreators";
import "./DialogOptions.css";

const mapStateToProps = (state: any) => {
  return {
    energy: state.hero.energy,
    gameLocation: state.location.gameLocation,
    place: state.location.place,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeGameLocation: (gameLocation: GameLocation) =>
      dispatch(changeGameLocation(gameLocation)),
    changePlace: (place: Place) => dispatch(changePlace(place)),
    subtractEnergy: (value: number) => dispatch(subtractEnergy(value)),
  };
};

// Trzeba to zrobić tak:

// Lokacja >>> Szansa na jakiś scenariusz

// Lokacja i scenariusz nie mają być "równoległe" - to dwie, nierówne sobie rzeczy. W danej lokacji może wystąpić dany scenariusz, bądź też
// nie musi występować w ogóle. Kiedy bohater przemieści się w dane miejsce, wówczas gra ma sama zdecydować czy coś ma się wydarzyć lub nie.
// Nie próbować "łączyć" lokacji i scenariusza na tym samym poziomie

const DialogOptions = (props: any) => {
  const handleDialogOptions = (gameLocation: GameLocation) => {
    const actualGameLocation = GameLocationsList.get(gameLocation.name);

    return (
      <>
        <div>
          {actualGameLocation?.dialogOptions.map((option, index) => (
            <button
              type="button"
              key={index}
              className="dialog-option m-1"
              onClick={() => handleOptionChoose(option)}
            >
              {option.message}
            </button>
          ))}
        </div>
        <div>
          {actualGameLocation?.places.map((place, index) => (
            <button
              type="button"
              key={index}
              className={
                place.name === props.place.name
                  ? "actual-place"
                  : "dialog-option m-1"
              }
              onClick={() => handlePlaceChange(place)}
            >
              Go to the {place.name}
            </button>
          ))}
        </div>
      </>
    );
  };

  const handleOptionChoose = (option: DialogOption) => {
    switch (option.typeOfAction) {
      case TypeOfAction.Travelling:
        props.changeLocation(option.gameLocation);
        break;
      case TypeOfAction.Speaking:
        // handleConversation(option.index);
        break;
      case TypeOfAction.Fighting:
        // handleFightMove(option.index);
        break;
    }
  };

  const handlePlaceChange = (place: Place) => {
    if (props.energy >= 5) {
      props.changePlace(place);
      props.subtractEnergy(5);
    }
  };

  return (
    <div className="options">{handleDialogOptions(props.gameLocation)}</div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogOptions);
