import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import axios from 'axios';
import { Link, useNavigation } from '@react-navigation/native';
import RegisterSchema from '../../validator/RegisterValidator';
import Colors from '../../utils/Colors';

const RegisterScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign up your account</Text>
            <Formik
                initialValues={{ username: '', password: '', confirmPassword: '', email: '', fullName: '', address: '', mobilePhone: '' }}
                validationSchema={RegisterSchema}
                onSubmit={(values, { setSubmitting }) => {
                    axios.post('http://10.10.100.236:8089/auth/register', values)
                        .then(response => {
                            setSubmitting(false);
                            navigation.navigate('Login');
                        })
                        .catch(error => {
                            console.log(error);
                            setSubmitting(false);
                        });
                }}
            >

                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View>
                        <Text style={styles.titleInput}>Username
                            <Text style={styles.error}> *</Text>
                            {errors.username && touched.username ? (
                                <Text style={styles.error}> {errors.username}</Text>
                            ) : null}
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                            placeholder="Enter your username"
                        />

                        <Text style={styles.titleInput}>Password
                            <Text style={styles.error}> *</Text>
                            {errors.password && touched.password ? (
                                <Text style={styles.error}> {errors.password}</Text>
                            ) : null}
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            placeholder="Enter your password"
                            secureTextEntry
                        />

                        <Text style={styles.titleInput}>Confirm Password
                            <Text style={styles.error}> *</Text>
                            {errors.confirmPassword && touched.confirmPassword ? (
                                <Text style={styles.error}> {errors.confirmPassword}</Text>
                            ) : null}
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            placeholder="Confirm your password"
                            secureTextEntry
                        />

                        <Text style={styles.titleInput}>Email
                            <Text style={styles.error}> *</Text>
                            {errors.email && touched.email ? (
                                <Text style={styles.error}> {errors.email}</Text>
                            ) : null}
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder="Enter your email"
                        />

                        <Text style={styles.titleInput}>Full Name
                            <Text style={styles.error}> *</Text>
                            {errors.fullName && touched.fullName ? (
                                <Text style={styles.error}> {errors.fullName}</Text>
                            ) : null}
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('fullName')}
                            onBlur={handleBlur('fullName')}
                            value={values.fullName}
                            placeholder="Enter your full name"
                        />

                        <Text style={styles.titleInput}>Address
                            <Text style={styles.error}> *</Text>
                            {errors.address && touched.address ? (
                                <Text style={styles.error}> {errors.address}</Text>
                            ) : null}
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('address')}
                            onBlur={handleBlur('address')}
                            value={values.address}
                            placeholder="Enter your street address"
                        />

                        <Text style={styles.titleInput}>Mobile Phone
                            <Text style={styles.error}> *</Text>
                            {errors.mobilePhone && touched.mobilePhone ? (
                                <Text style={styles.error}> {errors.mobilePhone}</Text>
                            ) : null}
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('mobilePhone')}
                            onBlur={handleBlur('mobilePhone')}
                            value={values.mobilePhone}
                            placeholder="Enter your mobile phone"
                        />
                        <Text style={{ color: Colors.PRIMARY_BLACK, marginBottom: 10, marginTop: 5 }}>Already have a account? <Link to={{ screen: 'Login'}} style={{ color:Colors.SOFT }}>Sign in</Link></Text>
                        <TouchableOpacity onPress={handleSubmit}>
                            <Text style={styles.buttonRegister}>Register</Text>
                        </TouchableOpacity>
                    </View>
                )}

            </Formik>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center",
        color: Colors.SOFT,
        marginBottom: 5,
    },
    titleInput: {
        color: Colors.SOFT,
    },
    input: {
        marginBottom: 5,
        padding: 10,
        height: 40,
        borderWidth: 1,
        borderColor: Colors.SOFT,
        borderRadius: 5,
        color: Colors.PRIMARY_BLACK,
        marginTop: 5,
    },
    error: {
        color: '#f67167',
    },
    buttonRegister: {
        width: 80,
        height: 35,
        backgroundColor: Colors.SOFT,
        color: Colors.WHITE,
        borderRadius: 5,
        textAlign: 'center',
        paddingTop: 7,
    },
});

export default RegisterScreen;