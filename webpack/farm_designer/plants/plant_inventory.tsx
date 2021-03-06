import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { t } from "i18next";
import { selectAllPlantPointers } from "../../resources/selectors";
import { PlantInventoryItem } from "./plant_inventory_item";
import { TaggedPlantPointer } from "../../resources/tagged_resources";
import { Everything } from "../../interfaces";

interface Props {
  plants: TaggedPlantPointer[];
  dispatch: Function;
}

interface State {
  searchTerm: string;
}

function mapStateToProps(props: Everything): Props {
  const plants = selectAllPlantPointers(props.resources.index);
  return {
    plants,
    dispatch: props.dispatch
  };
}

@connect(mapStateToProps)
export class Plants extends React.Component<Props, State> {

  state: State = { searchTerm: "" };

  update = ({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: currentTarget.value });
  }

  render() {
    return <div className="panel-container green-panel plant-inventory-panel">
      <div className="panel-header green-panel">
        <div className="panel-tabs">
          <Link to="/app/designer" className="visible-xs">
            {t("Designer")}
          </Link>
          <Link to="/app/designer/plants" className="active">
            {t("Plants")}
          </Link>
          <Link to="/app/designer/farm_events">
            {t("Farm Events")}
          </Link>
        </div>
      </div>

      <div className="panel-content row">

        <div className="thin-search-wrapper">
          <div className="text-input-wrapper">
            <i className="fa fa-search"></i>
            <input type="text" onChange={this.update}
              placeholder={t("Search your plants...")} />
          </div>
          {
            this.props.plants
              .filter(p => p.body.name.toLowerCase()
                .includes(this.state.searchTerm.toLowerCase()))
              .map(p => <PlantInventoryItem
                key={p.uuid}
                tpp={p}
                dispatch={this.props.dispatch} />)
          }
        </div>

      </div>

      <Link to="/app/designer/plants/crop_search">
        <div className="plus-button fb-button green">
          <i className="fa fa-2x fa-plus" />
        </div>
      </Link>

    </div>;
  }
}
