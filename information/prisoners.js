import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React ,{useEffect,useState}from 'react'
import Post_Big_Card from './Post_Big_Card';

const Prisoners = ({navigation}) => {

    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_KEY}getAllUser', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        console.log('Fetched data:', result);

        // Check if "data" property exists and contains an array
        if (result && result.data && Array.isArray(result.data)) {
          setData(result.data);
        } else {
          console.error('Invalid data structure:', result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    return (
        <ScrollView style={styles.container}>
            {
                data.map((item) => {
                    return (
                        <Post_Big_Card
                            key={item.id}
                            username={item.username}
                            profile_image={item.profile_image}
                            post_pic={item.image}
                            likes={item.likes}
                            comments={item.comments}
                        />
                    )
                })
            }
        </ScrollView>
    )
}

export default Prisoners

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
    }
})