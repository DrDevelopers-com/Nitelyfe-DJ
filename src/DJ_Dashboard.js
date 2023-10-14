import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
import Background from './Background';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from './SearchBar';
import Buttons from './Buttons';
import Notification from './Notification';

const DJ_Dashboard = (props) => {

    const screen_width = Dimensions.get("window").width;

    const [isSearchBarVisible, setSearchBarVisible] = useState(false);
    const [activeindex, Setactiveindex] = useState(0);
    const flatListRef = useRef();

    useEffect(() => {

        let interval = setInterval(() => {
            if (activeindex === carouselImages.length - 1) {
                flatListRef.current.scrollToIndex({
                    index: 0,
                    animated: true,
                });
                Setactiveindex(0);
            } else {
                flatListRef.current.scrollToIndex({
                    index: activeindex + 1,
                    animated: true,
                });
                Setactiveindex(activeindex + 1);
            }
        }, 2000);

        return () => clearInterval(interval);

    }, [activeindex]);

    const getItemLayout = (data, index) => ({
        length: screen_width,
        offset: screen_width * index,
        index: index,
    })

    const handleSearchIconClick = () => {
        setSearchBarVisible(true);
    };

    const handleSearch = (searchText) => {
        console.log('Searching for:', searchText);
    };

    const handleCloseSearch = () => {
        setSearchBarVisible(false);
    };

    const data = [
        { id: '1', text: 'Hot Club', width: 110 },
        { id: '2', text: 'Featured Club', width: 110 },
        { id: '3', text: 'Latest Club', width: 110 },
        { id: '4', text: 'Top Club', width: 110 },
    ];

    const clublist = [
        { clid: '1', image: require('./assets/bg_girl.jpg'), text: 'XS Nightclub', width: 110 },
        { clid: '2', image: require('./assets/bg_girl.jpg'), text: 'House of Yes', width: 110 },
        { clid: '3', image: require('./assets/bg_girl.jpg'), text: 'Fubar Club', width: 110 },
        { clid: '4', image: require('./assets/bg_girl.jpg'), text: 'Bali Club', width: 110 },

    ];

    const joblist = [
        { jlid: '1', image: require('./assets/bg_girl.jpg'), text: 'XS club\nDJ required\n120$/hr', width: 120 },
        { jlid: '2', image: require('./assets/bg_girl.jpg'), text: 'House if Yes\nDJ required\n120$/hr', width: 120 },
        { jlid: '3', image: require('./assets/bg_girl.jpg'), text: 'Fubar Club\nDJ required\n120$/hr', width: 120 },
        { jlid: '4', image: require('./assets/bg_girl.jpg'), text: 'Bali Club\nDJ required\n120$/hr', width: 120 },

    ];

    const carouselImages = [
        { cid: '1', image: require('./assets/bg_girl.jpg') },
        { cid: '2', image: require('./assets/bg_girl.jpg') },
        { cid: '3', image: require('./assets/bg_girl.jpg') },
    ];

    const aspectRatio = 16 / 8;

    const carouselrenderItem = ({ item, index }) => {
        return (
            <View key={item.cid} style={{ width: screen_width }}>
                <Image source={item.image} style={{ height: screen_width / aspectRatio, width: screen_width * 0.9, borderRadius: 7 }}></Image>
            </View>
        );
    };

    const dotrenderItem = () => {

        return carouselImages.map((dot, index) => {
            if (activeindex === index) {
                return (
                    <View key={index} style={{ backgroundColor: 'red', borderRadius: 5, height: 5, width: 5, marginHorizontal: 5 }}>
                    </View>
                );
            } else {
                return (
                    <View key={index} style={{ backgroundColor: 'white', borderRadius: 5, height: 5, width: 5, marginHorizontal: 5 }}>
                    </View>
                );
            }

        });
    };

    const handleScroll = (event) => {
        const contentOffset = event.nativeEvent.contentOffset.x;
        const centerIndex = Math.floor((contentOffset + screen_width / 2) / screen_width);
        Setactiveindex(centerIndex);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{ width: item.width * 0.9, backgroundColor: 'grey', padding: 5, margin: 5, borderRadius: 15, marginBottom: 15, }}
            onPress={() => handleItemClick(item)}
        >
            <Text style={{ color: 'white', fontSize: 12, alignSelf: 'center' }}>{item.text}</Text>
        </TouchableOpacity>
    );

    const clublistrenderItem = ({ item }) => (

        <View
            style={{ width: item.width * 0.9, margin: 3, marginTop: 5 }}
            onPress={() => handleItemClick(item)}>
            <View style={{ alignItems: 'center' }}>
                <Image source={item.image} style={{ height: 100, width: 90, borderRadius: 7 }} />
                <Text style={{ color: 'white', fontSize: 12, marginTop: 5 }}>{item.text}</Text>
                <TouchableOpacity
                    style={{ height: 20, width: 70, marginTop: 7, borderRadius: 5, backgroundColor: '#1E89A0', alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => handleButtonClick(item)}>
                    <Text style={{ color: 'white', fontSize: 10 }}>View Club</Text>
                </TouchableOpacity>
            </View>

        </View>

    );

    const joblistrenderItem = ({ item }) => (
        <View
            style={{ width: item.width * 0.9, margin: 6, marginTop: 10, marginBottom: 10, backgroundColor: '#FFFFFF26', borderRadius: 7 }}
            onPress={() => handleItemClick(item)}>
            <View style={{ alignItems: 'center' }}>
                <Image source={item.image} style={{ height: 75, width: 80, marginTop: 10, borderRadius: 7 }} />
                <Text style={{ color: 'white', fontSize: 12, marginTop: 5 }}>{item.text}</Text>
                <TouchableOpacity
                    style={{ height: 20, width: 70, marginTop: 7, marginBottom: 7, borderRadius: 5, backgroundColor: '#1E89A0', alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => handleButtonClick(item)}>
                    <Text style={{ color: 'white', fontSize: 10 }}>View Club</Text>
                </TouchableOpacity>
            </View>

        </View>

    );

    const handleItemClick = (item) => {
        console.log('Clicked item:', item);
    };
    return (
        <Background>
            <ScrollView>
                <View style={{ flexDirection: 'column', padding: 20, marginBottom: 10 }} >

                    {isSearchBarVisible ? (
                        <SearchBar onClose={handleCloseSearch} onSearch={handleSearch} />
                    ) : (
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'transparent', borderRadius: 5, margin: 10 }}>
                            <TouchableOpacity onPress={() => props.navigation.navigate(Notification)} >
                                <Icon name='filter' size={24} style={{ marginRight: 'auto' }} color="white" />
                            </TouchableOpacity>
                            <Text style={{ color: 'white', marginLeft: 'auto', marginRight: 'auto' }}>Explore</Text>
                            <TouchableOpacity onPress={handleSearchIconClick}>
                                <Icon name="search-outline" size={24} style={{ marginLeft: 'auto' }} color="white" />
                            </TouchableOpacity>
                        </View>
                    )}
                    <FlatList
                        horizontal
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                    />

                    <View style={{ marginTop: 10 }}>

                        <FlatList data={carouselImages} renderItem={carouselrenderItem}
                            keyExtractor={(item) => item.cid} horizontal={true}
                            pagingEnabled={true} onScroll={handleScroll} ref={flatListRef} getItemLayout={getItemLayout} > </FlatList>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                            {dotrenderItem()}
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={{ color: 'white', fontSize: 15, marginTop: 10, fontWeight: 'bold', marginRight: 'auto' }}>New Clubs</Text>
                        <Text style={{ color: 'white', fontSize: 15, marginTop: 10, marginLeft: 'auto' }}>View all</Text>
                    </View>
                    <FlatList
                        horizontal
                        data={clublist}
                        keyExtractor={(item) => item.clid}
                        renderItem={clublistrenderItem}
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'white', fontSize: 15, marginTop: 20, fontWeight: 'bold', marginRight: 'auto' }}>Find Jobs</Text>
                        <Text style={{ color: 'white', fontSize: 15, marginTop: 20, marginLeft: 'auto' }}>View all</Text>
                    </View>
                    <FlatList
                        horizontal
                        data={joblist}
                        keyExtractor={(item) => item.jlid}
                        renderItem={joblistrenderItem}
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                    />



                </View>
            </ScrollView>
        </Background>
    );
};

export default DJ_Dashboard;