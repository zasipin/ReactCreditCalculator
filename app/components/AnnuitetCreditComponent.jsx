import React from "react";
import { connect } from "react-redux";
// import {Link} from 'react-router';
import { withRouter, Link } from "react-router-dom";

import * as actions from "actions";

import { AnnuitetCredit } from "AnnuitetCredit";
import ShowYear from "ShowYear";

import { getTranslate } from "react-localize-redux";

export class AnnuitetCreditComponent extends React.Component {
  constructor(props) {
    super(props);
    this.months = props.months;
    this.dispatch = props.dispatch;
  }

  onPaymentsClick = e => {
    var { dispatch, sum, percents, activeCredit } = this.props;
    // e.preventDefault();
		if (activeCredit.months !== 0 && activeCredit.months !== this.months
				|| sum !== activeCredit.sum || percents !== activeCredit.percents ) {
      dispatch(actions.setActiveCreditMonths(this.months, sum, percents));
      dispatch(
        actions.setPaymentsTimetable({ sum, percents, months: this.months })
      );
    }
    // console.log("On link clicked months", months);
  };

  onRemoveClick = e => {
    e.preventDefault();
    this.dispatch(actions.removeMonthsItem(this.months));
  };

  render() {
    var {
      overpay,
      monthlyPay,
      totalPay,
      overpayPercentage,
      months,
      currentRouteName,
      translate
    } = this.props;
    var paymentsRoute = "payments";
    var linkTo;
    if (currentRouteName === "/" || !currentRouteName) {
      linkTo = paymentsRoute;
    } else {
      linkTo = `${currentRouteName}/${paymentsRoute}`;
    }

    return (
      <tr>
        <td className="small-text">
          <button
            className="button small"
            type="button"
            onClick={this.onRemoveClick}
          >
            {/* <!-- Screen readers will see "close" --> */}
            <span className="show-for-sr">translate('remove')</span>
            {/* <!-- Visual users will see the X, but not the "Close" text --> */}
            <span aria-hidden="true">
              <i className="fi-minus"> </i>
            </span>
          </button>
        </td>
        <td className="small-text">
          <div>
            <ShowYear months={months} />
          </div>
          <div>
            {months} {translate("monthShort")}.
          </div>
        </td>
        <td>
          <Link
            to={linkTo}
            onClick={this.onPaymentsClick}
            className="show-payments"
          >
            {parseInt(monthlyPay)}
          </Link>{" "}
          {translate("currency")}
        </td>
        <td>
          <span className="dark-text">{parseInt(totalPay)}</span>{" "}
          {translate("currency")}
        </td>
        <td>
          <span className="dark-text">{parseInt(overpay)}</span>{" "}
          {translate("currency")}
        </td>
        <td>
          <span className="dark-text">
            {parseFloat(overpayPercentage).toFixed(2)}
          </span>{" "}
          %
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
  sum: state.creditProps.sum,
  percents: state.creditProps.percents,
  activeCredit: state.activeCredit
});

export default withRouter(connect(mapStateToProps)(AnnuitetCreditComponent));
