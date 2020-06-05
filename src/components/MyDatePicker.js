import React, { useState } from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 40,
  },
  title: {
    color: '#7E7E7E',
    fontSize: 16,
  },
  dateContainer: {
    backgroundColor: '#fff',
    height: 32,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
  },
  date: {
    paddingLeft: 6,
    fontSize: 18,
  },
});

const MyDatePicker = () => {
  const [isDatePickerVisible, setDatePickerBisibility] = useState(false);
  const [date, setDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerBisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerBisibility(false);
  };

  const handleSubmit = (date) => {
    const y = date.getFullYear();
    const m = 1 + date.getMonth();
    const d = date.getDate();
    const str = y + '/' + m + '/' + d;
    setDate(str);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>開催日</Text>
      <TouchableOpacity style={styles.dateContainer} onPress={showDatePicker}>
        <Text style={styles.date}>{date}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleSubmit}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default MyDatePicker;
