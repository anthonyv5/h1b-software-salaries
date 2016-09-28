
import React from 'react';
import { mean as d3mean } from 'd3-array';
import S from 'string';

import Meta from './BaseComponent';
import StatesMap from './StatesMap';

class Title extends Meta {
    getYearsFragment() {
        var years = this.getYears(),
            title;


        if (years.length > 1) {
            title = "";
        }else{
            title = "in "+years[0];
        }

        return title;
    }

    getStateFragment() {
        var states = this.getUSStates(),
            title;


        if (states.length > 1) {
            title = "";
        }else{
            title = "in "+StatesMap[states[0].toUpperCase()];
        }

        return title;
    }

    getJobTitleFragment() {
        var jobTitles = this.getJobTitles(),
            title;

        if (jobTitles.length > 1) {
            title = "H1B workers in the software industry";
        }else{
            if (jobTitles[0] === "other") {
                title = "Other H1B workers in the software industry";
            }else{
                title = "Software "+jobTitles[0]+"s on an H1B";
            }
        }

        return title;
    }

    render() {
        var mean = d3mean(this.props.data,
                          function (d) { return d.base_salary; }),
            format = this.getFormatter();

        var
            yearsFragment = this.getYearsFragment(),
            jobTitleFragment = this.getJobTitleFragment(),
            stateFragment = this.getStateFragment(),
            title;

        if (yearsFragment && stateFragment) {
            title = (
                <h2>{S(stateFragment).capitalize().s}, {jobTitleFragment} {yearsFragment.length ? "made" : "make"} ${format(mean)}/year {yearsFragment}</h2>
            );
        }else{
            title = (
                <h2>{jobTitleFragment} {yearsFragment.length ? "made" : "make"} ${format(mean)}/year {stateFragment} {yearsFragment}</h2>
            );
        }

        return title;
    }
}

export default Title;
