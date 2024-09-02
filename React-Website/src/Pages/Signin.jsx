import React, { useState } from 'react'
import Header from '../Component/Navbar'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Service/firebase'

const INTIALIZE = {
    fname: "",
    lname: "",
    email: "",
    country:"",
    Dob:"",
    Cpassword:"",
    Password:"",
    countrycallingcode:"",
    Number:""

  };
  

const Signin = () => {

    const [formData, setFormData] = useState(INTIALIZE);

    const {  email,Dob,countrycallingcode,Number,Password, Cpassword,country, fname,lname, zender } = formData;
  
    function handleclick(e) {
      e.preventDefault();
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }

    
     function CreateData(){
        createUserWithEmailAndPassword(auth,formData.email ,formData.Password ).then((res)=>{{
            alert("Account Created..")
             window.location.href="/"
        }}).catch((err)=>{
            console.log(err)
        })
     }

    return (
        <div>
            <Header />
            <div className="Sign-in-form-1">
                <div className="Sign-Form-Text">
                    <h2>Create Your Apple ID</h2>
                    <p>One Apple ID is all you need to access all Apple services.</p>
                </div>
                <div className='Sign-Form-Content'>
                    <div className="Signin-First-1">
                        <input type="text" name='fname' value={fname} onChange={handleclick} placeholder='first name' className='Signup-input' />
                        <input type="text" placeholder='Last name' name='lname' value={lname} onChange={handleclick} />

                    </div>
                    <div className="Signin-First-2">
                        <p>COUNTRY / REGION</p>
                        <select    name="country" value={country} id="countries">
                            <option value="AF">Afghanistan</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="VG">British Virgin Islands</option>
                            <option value="BN">Brunei</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CW">Curacao</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="CD">Democratic Republic of the Congo</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="TL">East Timor</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">Falkland Islands</option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="PF">French Polynesia</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="CI">Ivory Coast</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Laos</option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MK">Macedonia</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="MX">Mexico</option>
                            <option value="FM">Micronesia</option>
                            <option value="MD">Moldova</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="AN">Netherlands Antilles</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="KP">North Korea</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">Palestine</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn</option>
                        </select>

                        <br />

                        <input type="date"  name='Dob' value={Dob} onChange={handleclick} placeholder='Date of Birth' style={{marginTop:"15px"}} />
                    </div>
                    <div className="Signin-First-3">
                        <input type="email"  name='email' value={email} onChange={handleclick} placeholder='Name@example.com'  style={{marginBottom:"15px"}}/> <br />
                        <input type="password" name='Password' value={Password} onChange={handleclick} placeholder='Password'  id=""  style={{marginBottom:"15px"}}/> <br />
                        <input type="password" name='Cpassword' value={Cpassword} onChange={handleclick} placeholder='Confirm Password'  id=""  />

                    </div>
                    <div className="Signin-First-3">
                        <select name="countrycallingcode" value={countrycallingcode} onChange={handleclick}>
                            <option value="1">United States (+1)</option>
                            <option value="1">Canada (+1)</option>
                            <option value="7">Russia (+7)</option>
                            <option value="20">Egypt (+20)</option>
                            <option value="27">South Africa (+27)</option>
                            <option value="30">Greece (+30)</option>
                            <option value="31">Netherlands (+31)</option>
                            <option value="32">Belgium (+32)</option>
                            <option value="33">France (+33)</option>
                            <option value="34">Spain (+34)</option>
                            <option value="36">Hungary (+36)</option>
                            <option value="39">Italy (+39)</option>
                            <option value="40">Romania (+40)</option>
                            <option value="41">Switzerland (+41)</option>
                            <option value="43">Austria (+43)</option>
                            <option value="44">United Kingdom (+44)</option>
                            <option value="45">Denmark (+45)</option>
                            <option value="46">Sweden (+46)</option>
                            <option value="47">Norway (+47)</option>
                            <option value="48">Poland (+48)</option>
                            <option value="49">Germany (+49)</option>
                            <option value="51">Peru (+51)</option>
                            <option value="52">Mexico (+52)</option>
                            <option value="53">Cuba (+53)</option>
                            <option value="54">Argentina (+54)</option>
                            <option value="55">Brazil (+55)</option>
                            <option value="56">Chile (+56)</option>
                            <option value="57">Colombia (+57)</option>
                            <option value="58">Venezuela (+58)</option>
                            <option value="60">Malaysia (+60)</option>
                            <option value="61">Australia (+61)</option>
                            <option value="62">Indonesia (+62)</option>
                            <option value="63">Philippines (+63)</option>
                            <option value="64">New Zealand (+64)</option>
                            <option value="65">Singapore (+65)</option>
                            <option value="66">Thailand (+66)</option>
                            <option value="81">Japan (+81)</option>
                            <option value="82">South Korea (+82)</option>
                            <option value="84">Vietnam (+84)</option>
                            <option value="86">China (+86)</option>
                            <option value="90">Turkey (+90)</option>
                            <option value="91">India (+91)</option>
                            <option value="92">Pakistan (+92)</option>
                            <option value="93">Afghanistan (+93)</option>
                            <option value="94">Sri Lanka (+94)</option>
                            <option value="95">Myanmar (+95)</option>
                            <option value="98">Iran (+98)</option>
                            <option value="211">South Sudan (+211)</option>
                            <option value="212">Morocco (+212)</option>
                            <option value="213">Algeria (+213)</option>
                            <option value="216">Tunisia (+216)</option>
                            <option value="218">Libya (+218)</option>
                            <option value="220">Gambia (+220)</option>
                            <option value="221">Senegal (+221)</option>
                            <option value="222">Mauritania (+222)</option>
                            <option value="223">Mali (+223)</option>
                            <option value="224">Guinea (+224)</option>
                            <option value="225">Ivory Coast (+225)</option>
                            <option value="226">Burkina Faso (+226)</option>
                            <option value="227">Niger (+227)</option>
                            <option value="228">Togo (+228)</option>
                            <option value="229">Benin (+229)</option>
                            <option value="230">Mauritius (+230)</option>
                            <option value="231">Liberia (+231)</option>
                            <option value="232">Sierra Leone (+232)</option>
                            <option value="233">Ghana (+233)</option>
                            <option value="234">Nigeria (+234)</option>
                            <option value="235">Chad (+235)</option>
                            <option value="236">Central African Republic (+236)</option>
                            <option value="237">Cameroon (+237)</option>
                            <option value="238">Cape Verde (+238)</option>
                            <option value="239">São Tomé and Príncipe (+239)</option>
                            <option value="240">Equatorial Guinea (+240)</option>
                            <option value="241">Gabon (+241)</option>
                            <option value="242">Republic of the Congo (+242)</option>
                            <option value="243">Democratic Republic of the Congo (+243)</option>
                            <option value="244">Angola (+244)</option>
                            <option value="245">Guinea-Bissau (+245)</option>
                            <option value="246">British Indian Ocean Territory (+246)</option>
                            <option value="248">Seychelles (+248)</option>
                            <option value="249">Sudan (+249)</option>
                            <option value="250">Rwanda (+250)</option>
                            <option value="251">Ethiopia (+251)</option>
                            <option value="252">Somalia (+252)</option>
                            <option value="253">Djibouti (+253)</option>
                            <option value="254">Kenya (+254)</option>
                            <option value="255">Tanzania (+255)</option>
                            <option value="256">Uganda (+256)</option>
                            <option value="257">Burundi (+257)</option>
                            <option value="258">Mozambique (+258)</option>
                            <option value="260">Zambia (+260)</option>
                            <option value="261">Madagascar (+261)</option>
                            <option value="262">Réunion (+262)</option>
                            <option value="263">Zimbabwe (+263)</option>
                            <option value="264">Namibia (+264)</option>
                            <option value="265">Malawi (+265)</option>
                            <option value="266">Lesotho (+266)</option>
                            <option value="267">Botswana (+267)</option>
                            <option value="268">Eswatini (+268)</option>
                            <option value="269">Comoros (+269)</option>
                            <option value="290">Saint Helena (+290)</option>
                            <option value="291">Eritrea (+291)</option>
                            <option value="297">Aruba (+297)</option>
                            <option value="298">Faroe Islands (+298)</option>
                            <option value="299">Greenland (+299)</option>
                            <option value="350">Gibraltar (+350)</option>
                            <option value="351">Portugal (+351)</option>
                            <option value="352">Luxembourg (+352)</option>
                            <option value="353">Ireland (+353)</option>
                            <option value="354">Iceland (+354)</option>
                            <option value="355">Albania (+355)</option>
                            <option value="356">Malta (+356)</option>
                            <option value="357">Cyprus (+357)</option>
                            <option value="358">Finland (+358)</option>
                            <option value="359">Bulgaria (+359)</option>
                            <option value="370">Lithuania (+370)</option>
                            <option value="371">Latvia (+371)</option>
                            <option value="372">Estonia (+372)</option>
                            <option value="373">Moldova (+373)</option>
                            <option value="374">Armenia (+374)</option>
                            <option value="375">Belarus (+375)</option>
                            <option value="376">Andorra (+376)</option>
                            <option value="377">Monaco (+377)</option>
                            <option value="378">San Marino (+378)</option>
                            <option value="379">Vatican City (+379)</option>
                            <option value="380">Ukraine (+380)</option>
                            <option value="381">Serbia (+381)</option>
                            <option value="382">Montenegro (+382)</option>
                            <option value="383">Kosovo (+383)</option>
                            <option value="385">Croatia (+385)</option>
                            <option value="386">Slovenia (+386)</option>
                            <option value="387">Bosnia and Herzegovina (+387)</option>
                            <option value="389">North Macedonia (+389)</option>
                            <option value="420">Czech Republic (+420)</option>
                            <option value="421">Slovakia (+421)</option>
                            <option value="423">Liechtenstein (+423)</option>
                            <option value="500">Falkland Islands (+500)</option>
                            <option value="501">Belize (+501)</option>
                            <option value="502">Guatemala (+502)</option>
                            <option value="503">El Salvador (+503)</option>
                            <option value="504">Honduras (+504)</option>
                            <option value="505">Nicaragua (+505)</option>
                        </select>
                        <br />
                        <input type="text" placeholder='phone number' name="Number" value={Number} onChange={handleclick}  style={{marginTop:"15px"}}/>
                        <p>Make sure you enter a phone number you can always access. It <br /> will be used to verify your identity any time you sign in on a new device or web browser. Messaging or data rates may apply.</p>
                    </div>

                      <div className="Signin-First-3">
                        <button onClick={CreateData}>Continue</button>
                        </div>


                </div>
            </div>
            <div className="Footer-Signin-1">
                <div className="Footer-Text-1-Signin">
                    <p  className='Footer-1'>More ways to shop:  <Link> Find a retailer </Link>near you. Or call 000800 040 1966.</p>
                    <div className='Footer-Para-lasts' >
            <div className="Footer-Links-Last" style={{marginTop:"-24px"}}>
            <p  className='COPY-last lst-signup'>Copyright © 2024 Apple Inc. All rights reserved.</p>
             <div className='Last-links'>
             <Link className='A-1'>Privacy Policy</Link>
                <Link  className='A-2'>Terms of Use</Link>
                <Link className='A-3'>Sales Policy</Link>
                <Link className='A-4'>Legal</Link>
                <Link className='A-5'>Site Map</Link>
             </div>
            </div>
            <div className="Footer-link-country">
                <p className='Para-Country'>India</p>
            </div>
            </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
