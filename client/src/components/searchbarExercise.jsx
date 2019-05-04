// Need to pass suggestions down from dialog.
// Since moved styles into separate file, the form changes size based on whether you are searching.
// It would be nicer if it stayed the same size.
import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Downshift from 'downshift';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import styles from '../css/searchbarStyles';

const suggestions = [
  { label: 'Aerobics', exerciseType: "Aerobic"},
  { label: 'Badmington', exerciseType: "Aerobic"},
  { label: 'Baseball', exerciseType: "Aerobic"},
  { label: 'Basketball', exerciseType: "Aerobic"},
  { label: 'Beach volleyball', exerciseType: "Aerobic"},
  { label: 'Biathlon', exerciseType: "Aerobic"},
  { label: 'Boxing', exerciseType: "Aerobic"},
  { label: 'Callisthenics', exerciseType: "Aerobic"},
  { label: 'Circuit training', exerciseType: "Weight"},
  { label: 'Cricket', exerciseType: "Aerobic"},
  { label: 'Cross skating', exerciseType: "Aerobic"},
  { label: 'Cross skiing', exerciseType: "Aerobic"},
  { label: 'Cross fit', exerciseType: "Aerobic"},
  { label: 'Curling', exerciseType: "Aerobic"},
  { label: 'Cycling', exerciseType: "Aerobic"},
  { label: 'Dancing', exerciseType: "Aerobic"},
  { label: 'Diving', exerciseType: "Aerobic"},
  { label: 'Downhill skiing', exerciseType: "Aerobic"},
  { label: 'Eliptical', exerciseType: "Aerobic"},
  { label: 'Ergometer', exerciseType: "Aerobic"},
  { label: 'Fencing', exerciseType: "Aerobic"},
  { label: 'Fitness walking', exerciseType: "Aerobic"},
  { label: 'Football', exerciseType: "Aerobic"},
  { label: 'Frisbee', exerciseType: "Aerobic"},
  { label: 'Gardening', exerciseType: "Aerobic"},
  { label: 'Golf', exerciseType: "Aerobic"},
  { label: 'Guided breathing', exerciseType: "Balance"},
  { label: 'Gymnastics', exerciseType: "Aerobic"},
  { label: 'Handball', exerciseType: "Aerobic"},
  { label: 'Handcycling', exerciseType: "Aerobic"},
  { label: 'High intensity interval training', exerciseType: "Aerobic"},
  { label: 'Hiking', exerciseType: "Aerobic"},
  { label: 'Horse Riding', exerciseType: "Aerobic"},
  { label: 'Ice skating', exerciseType: "Aerobic"},
  { label: 'Indoor skating', exerciseType: "Aerobic"},
  { label: 'Indoor volleyball', exerciseType: "Aerobic"},
  { label: 'Inline skating', exerciseType: "Aerobic"},
  { label: 'Interval training', exerciseType: "Aerobic"},
  { label: 'Jogging', exerciseType: "Aerobic"},
  { label: 'Kyaking', exerciseType: "Aerobic"},
  { label: 'Kettlebell', exerciseType: "Strength"},
  { label: 'Kick scooter', exerciseType: "Aerobic"},
  { label: 'Kickboxing', exerciseType: "Aerobic"},
  { label: 'Kick skiing', exerciseType: "Aerobic"},
  { label: 'Kitesurfing', exerciseType: "Aerobic"},
  { label: 'Martial Arts', exerciseType: "Aerobic"},
  { label: 'Meditating', exerciseType: "Balance"},
  { label: 'Mixed Martial Arts', exerciseType: "Aerobic"},
  { label: 'Mountain Biking', exerciseType: "Aerobic"},
  { label: 'Kayaking', exerciseType: "Aerobic"},
  { label: 'Nordic Walking', exerciseType: "Aerobic"},
];

function renderInput(inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput,
        },
        ...InputProps,
      }}
      {...other}
    />
  );
}

function renderSuggestion({ suggestion, index, itemProps, highlightedIndex, selectedItem }) {
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.label} ({suggestion.exerciseType})
    </MenuItem>
  );
}
renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.string,
  suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
};
  
function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function IntegrationDownshift(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Downshift id="downshift-simple">
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem,
        }) => (
          <div className={classes.container}>
            {renderInput({
              fullWidth: true,
              classes,
              InputProps: getInputProps({
                placeholder: 'Search for exercise',
              }),
            })}
            <div {...getMenuProps()}>
              {isOpen ? (
                <Paper className={classes.paper} square>
                  {getSuggestions(inputValue).map((suggestion, index) =>
                    renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({ item: suggestion.label, servingSize: suggestion.servingSize }),
                      highlightedIndex,
                      selectedItem,
                    }),
                  )}
                </Paper>
              ) : null}
            </div>
          </div>
        )}
      </Downshift>
    </div>
  );
}

IntegrationDownshift.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntegrationDownshift);
