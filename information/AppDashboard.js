

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AnimatedProgressWheel from './dashboardinfo';

function AppDashBoard() {
  const [lawyerCount, setLawyerCount] = useState(0);
  const [prisonerCount, setPrisonerCount] = useState(0);

  useEffect(() => {
    // Fetch the number of lawyers and prisoners from your API
    fetch(`${API_KEY}api/users/count`)
      .then((response) => response.json())
      .then((data) => {
        console.log('start')
        console.log(data)
        console.log(data.lawyerCount)
        setLawyerCount(data.lawyerCount); 
        console.log('lawyer')
        console.log(data.lawyerCount);
        console.log(data.prisonerCount);
        setPrisonerCount(data.prisonerCount);
        console.log(data.prisonerCount);

      })
      .catch((error) => {
        console.error('Error fetching user counts:', error);
      });
  }, []); // This useEffect will run once when the component mounts

  const size = 240;
  const duration = 1500;
  const width = 10;
  const rounded = true;
  const color = '#49ccf9';
  const backgroundColor = '#000079';

  return (
    <View>
      <Text style={{ fontSize: 30, padding: 30 }}>Dash Board</Text>
      <Text style={{ fontSize: 25, paddingHorizontal: 520, color: '#49ccf9' }}>Currently connect with us</Text>

      <View style={styles.container}>
        <AnimatedProgressWheel
          max={100}
          progress={lawyerCount}
          showProgressLabel={true}
          showPercentageSymbol={false}
          rotation={'-90deg'}
          labelStyle={styles.progressLabel}
          subtitle={'Lawyers'}
          subtitleStyle={styles.subtitle}
          {...{ color, backgroundColor, size, width, duration, rounded }}
        />

        <AnimatedProgressWheel
          max={100}
          progress={prisonerCount}
          showProgressLabel={true}
          showPercentageSymbol={false}
          rotation={'-90deg'}
          labelStyle={styles.progressLabel}
          subtitle={'Prisoners'}
          subtitleStyle={styles.subtitle}
          {...{ color, backgroundColor, size, width, duration, rounded }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 400,
    paddingRight: 400,
    transform: [{ scale: 0.8 }],
  },
  absolute: {
    position: 'absolute',
  },
  progressLabel: {
    color: '#49ccf9',
    fontWeight: 'bold',
    fontSize: 26,
  },
  subtitle: {
    fontSize: 14,
    color: '#49ccf9',
  },
});
export default AppDashBoard;








// import React, { useEffect, useState } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import AnimatedProgressWheel from './dashboardinfo';

// function AppDashBoard() {
//   const [messageCounts, setMessageCounts] = useState(0);

//   useEffect(() => {
//     // Fetch the number of lawyers and prisoners from your API
//   //   fetch(`${API_KEY}api/users/count')
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       console.log('start')
//   //       console.log(data)
//   //       console.log(data.lawyerCount)
//   //       setLawyerCount(data.lawyerCount); 
//   //       console.log('lawyer')
//   //       console.log(data.lawyerCount);
//   //       console.log(data.prisonerCount);
//   //       setPrisonerCount(data.prisonerCount);
//   //       console.log(data.prisonerCount);

//   //     })
//   //     .catch((error) => {
//   //       console.error('Error fetching user counts:', error);
//   //     });
//   // }, []); // This useEffect will run once when the component mounts

//   fetch(`${API_KEY}api/messages/count')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('start')
//     console.log(data)
//     // console.log(data.lawyerCount)
//     // setLawyerCount(data.lawyerCount); 
//     // console.log('lawyer')
//     // console.log(data.lawyerCount);
//     // console.log(data.prisonerCount);
//     // setPrisonerCount(data.prisonerCount);
//     // console.log(data.prisonerCount); 
//     console.log(data.count)

//     setMessageCounts(data.messageCounts);

//   })
//   .catch((error) => {
//     console.error('Error fetching user counts:', error);
//   });
// }, []); // This useEffect will run once when the component mounts

//   const size = 240;
//   const duration = 1500;
//   const width = 10;
//   const rounded = true;
//   const color = '#49ccf9';
//   const backgroundColor = '#000079';

//   return (
//     <View>
//       <Text style={{ fontSize: 30, padding: 30 }}>Dash Board</Text>
//       <Text style={{ fontSize: 25, paddingHorizontal: 520, color: '#49ccf9' }}>Currently connect with us</Text>

//       <View style={styles.container}>
//         <AnimatedProgressWheel
//           max={100}
//           progress={messageCounts}
//           showProgressLabel={true}
//           showPercentageSymbol={false}
//           rotation={'-90deg'}
//           labelStyle={styles.progressLabel}
//           subtitle={'Lawyers'}
//           subtitleStyle={styles.subtitle}
//           {...{ color, backgroundColor, size, width, duration, rounded }}
//         />

//         {/* <AnimatedProgressWheel
//           max={100}
//           progress={prisonerCount}
//           showProgressLabel={true}
//           showPercentageSymbol={false}
//           rotation={'-90deg'}
//           labelStyle={styles.progressLabel}
//           subtitle={'Prisoners'}
//           subtitleStyle={styles.subtitle}
//           {...{ color, backgroundColor, size, width, duration, rounded }}
//         /> */}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexDirection: 'row',
//     paddingLeft: 400,
//     paddingRight: 400,
//     transform: [{ scale: 0.8 }],
//   },
//   absolute: {
//     position: 'absolute',
//   },
//   progressLabel: {
//     color: '#49ccf9',
//     fontWeight: 'bold',
//     fontSize: 26,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#49ccf9',
//   },
// });
// export default AppDashBoard;

