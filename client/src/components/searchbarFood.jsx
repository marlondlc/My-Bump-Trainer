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
  { label: 'Acorn Squash', servingSize: "0.5 Cup" },
  { label: 'Adzuki Beans', servingSize: "0.5 Cup"},
  { label: 'Agave Syrup', servingSize: "1 Tbsp"},
  { label: 'Aioli', servingSize: "1 Tbsp" },
  { label: 'Alfalfa Sprouts', servingSize: "0.5 Cup"},
  { label: 'Almond milk', servingSize: "" },
  { label: 'Almond Oil', servingSize: "1 Tbsp"},
  { label: 'Almonds', servingSize: "15g"},
  { label: 'Amaranth', servingSize: "0.5 Cup"},
  { label: 'Anchovies', servingSize: "20g"},
  { label: 'Ants, chocolate covered', servingSize: "1 Tbsp"},
  { label: 'Apple', servingSize: "1 Apple" },
  { label: 'Apple Cider', servingSize: "1 Tbsp"},
  { label: 'Apple Juice', servingSize: "1 Cup" },
  { label: 'Apple Juice concentrate', servingSize: "100mL"},
  { label: 'Apple Sauce', servingSize: "1 Tbsp" },
  { label: 'Apricot', servingSize: "1 Apricot"},
  { label: 'Arrowroot', servingSize: "1 Tbsp"},
  { label: 'Artichoke', servingSize: "1 Artichoke" },
  { label: 'Artichoke Heart', servingSize: "1 Artichoke Heart" },
  { label: 'Artificial Sweetener', servingSize: "1 Tablet" },
  { label: 'Asparagus', servingSize: "70 g" },
  { label: 'Aubergine', servingSize: "1 Cup" },
  { label: 'Avocado', servingSize: "100g" },
  { label: 'Avocado Oil', servingSize: "100g" },
  { label: 'Avocado Spread', servingSize: "100g" },
  { label: 'Baba ghanoush', servingSize: "1 Cup" },
  { label: 'Bacon', servingSize: "27g" },
  { label: 'Bagel', servingSize: "1 Bagel" },
  { label: 'Baguette', servingSize: "0.25 Baguette" },
  { label: 'Baked Alaska', servingSize: "1 Slice" },
  { label: 'Baked Beans', servingSize: "0.5 Can" },
  { label: 'Baklava', servingSize: "1 Slice" },
  { label: 'Banana', servingSize: "1 Banana" },
  { label: 'Barley Pearl', servingSize: "0.5 Cup" },
  { label: 'Barramundi', servingSize: "160g" },
  { label: 'Basmati Rice', servingSize: "0.5 Cup" },
  { label: 'Bean Shoots', servingSize: "0.5 Cup"},
  { label: 'Beetroot', servingSize: "1 Beet" },
  { label: 'Birds nest soup', servingSize: "1 Bowl" },
  { label: 'Biscuit', servingSize: "1 Biscuit" },
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
      {suggestion.label} (serving size is {suggestion.servingSize})
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
                placeholder: 'Search for food',
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
