 function convertLength(length, fromUnit, toUnit) {
    // Perform the conversion based on the units
    switch (fromUnit) {
      case "inches":
        switch (toUnit) {
          case "inches":
            return length;
          case "centimeters":
            return length * 2.54;
          case "feet":
            return length / 12;
          case "meters":
            return length * 0.0254;
        }
        break;
      case "centimeters":
        switch (toUnit) {
          case "inches":
            return length / 2.54;
          case "centimeters":
            return length;
          case "feet":
            return length / 30.48;
          case "meters":
            return length / 100;
        }
        break;
    }
  }
