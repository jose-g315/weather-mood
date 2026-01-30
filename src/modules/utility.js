function getSearchTerm(temp) {
  if (temp < 33) {
    return 'freezing';
  } else if (temp > 33 && temp < 60) {
    return 'cold';
  } else if (temp > 60 && temp < 80) {
    return 'nice';
  } else if (temp > 80 && temp < 100) {
    return 'hot';
  } else if (temp > 100) {
    return 'burning';
  } else {
    return 'happy';
  }
}

export { getSearchTerm };
