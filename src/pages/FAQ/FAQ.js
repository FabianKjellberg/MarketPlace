import React from "react";
import './FAQ.css'
import CollapsableMenu from "../../components/CollapsableMenu/CollapsableMenu.js";
import GenericBanner from "../../components/GenericBanner/GenericBanner";

function FAQ(){


    return(
        <>

            
            <GenericBanner bannerText={"Frequently Asked Questions"}/>
            <div className="faq-forms">
                <CollapsableMenu title={"How much does it cost to sell a watch on zeroTo60s?"}>
                    <p><strong>There are 3 options to sell a watch on Zeroto60s</strong></p>
                    <p><strong>7 days auction</strong></p>
                    <p>Sellers can list list their items for free and receive 100% of the final bid amount, with the deduction of half of the escrow fee.</p>
                    <p><strong>One Day Auction</strong></p>
                    <p>The auction period for this listing is 24 hours. During this time, Zeroto60s will work closely with the seller to set a reserve price that ensures a successful sale. In the case of an unsuccessful listing Zeroto60s will commit to purchase of the listing at the agreed-upon amount, allowing the seller to receive their net proceed within a few days. Zeroto60s will charge a 6% fee based on the final price.</p>
                    <p><strong>Premium Listing</strong></p>
                    <p>The seller can utilize Zeroto60's assistance in the auction listing process, which includes premium listing placement, communication with potential buyes and social media marketing to enhance awareness. In return, Zeroto60s will charge a 6% fee based on the final price.</p>
                    <p>&nbsp;</p>
                </CollapsableMenu>
                <CollapsableMenu title={"How do I know if you are interested in my watch?"}>
                    <p>Our experienced curators have studied the market to ensure the timepieces we select, and list, are sought-after from buyers and collectors alike. Click "SELL NOW" and tell us more about your timepiece that you would like to list with us.</p>
                    <p>If you have an interesting watch with realistic price expectations, we would love to help!</p>   
                </CollapsableMenu>
                <CollapsableMenu title={"Will you consign?"}>
                    <p>We can assist you by connecting you with our third-party partners. Please contact us about your inquiry.</p>
                </CollapsableMenu>
                <CollapsableMenu title={"What information do I need to provide to Zero to 60s?"}>  
                    <p>When you submit a watch for consideration, we will ask for photos and key details of it. When we decide to consign a watch, our copywriters will contact you to gather further information.</p>
                </CollapsableMenu>
                <CollapsableMenu title={"What do you need to know about my watch?"}>  
                    <p>We aim to ensure our listings are the most accurate of any online auction platform. For this reason, we will need the full story about your watch, all watches must come with box and receipts including any flaws or faults.</p>
                    <p>While Zeroto60s does perform some due diligence including checking the serial number and receipts, Zeroto60s shall not be liable to the seller or the buyer for any error or misstatement in, or omission from the description of any Auction.</p>
                </CollapsableMenu>
                <CollapsableMenu title={"Can I set a minimum selling price for my watch?"}>  
                    <p>Sellers can request for a minimum reserve. The value of any reserve is agreed in consultation with the Zeroto60s team to ensure it is realistic.</p>
                    <p>Once a reserve is agreed with Zeroto60s, you may reduce it or withdraw it by written notice to Zeroto60s, but you cannot increase it without prior written consent. Please note that Zeroto60s has the right to make up the difference between the highest bid and the reserve if the highest bid does not meet the reserve.</p>
                </CollapsableMenu>
                <CollapsableMenu title={"What happens once my auction is live?"}>
                    <p>Once an auction item is open for bidding any registered user can ask a question about it in the comments below each listing. Sellers should respond as soon as possible.</p>
                </CollapsableMenu>
                <CollapsableMenu title={"What about negative comments about my listing?"}>
                    <p>Our moderators will allow users to add constructive opinions about the listing, but if you believe any comment is inaccurate please contact us immediately.</p>
                </CollapsableMenu>
                <CollapsableMenu title={"Do I get to approve the auction listing before it goes live?"}>
                    <p>Every listing is presented to the seller for approval before it goes live. It is the seller&rsquo;s responsibility to ensure that the listing is an accurate description of the listing. The proposed start date for the auction will be discussed at this point.</p>
                </CollapsableMenu>
                <CollapsableMenu title={"Can I bid on my own auction?"}>
                    <p>No, you cannot, bid on your own auction, nor can you have a friend bid on your auction on your behalf.</p>
                    <p>If we believe that you or someone on your behalf has bid on your listing and the listing does not sell to a real bidder as a result, you will be responsible for covering all costs incurred by Zeroto60s that have resulted from skewing the results of your listing and your breach of the Terms and Conditions.</p>
                    <p>If it is found that you or someone on your behalf has "bid up" an auction, we will have to divulge this information to the buyer and provide them with the option to no longer purchase the listing at no expense to them. If they would like to no longer purchase the listing, you (the Seller) will be responsible for covering all costs incurred by Zeroto60s, you will be banned from using the platform in the future and you may be pursued for committing an act of fraud or other criminal offences.</p>
                </CollapsableMenu>
                <CollapsableMenu title={"Can I withdraw my auction?"}>
                    <p>Once you have submitted your listing to Zeroto60s and the auction has gone live in our &lsquo;Coming Soon&rsquo; section, you cannot withdraw your watch. If you do withdraw your watch, you will be obliged to pay the fees to Zeroto60s in accordance to&nbsp; the Terms and Conditions that would have been paid by the Buyer, calculated on the last reserve you agreed with Zeroto60s, or if none, a minimum charge.</p>
                </CollapsableMenu>
                <CollapsableMenu title={"What happens next when the auction sells?"}>
                    <p>When an auction sells successfully on the platform, a 6% premium plus half of escrow fee are automatically deducted from the winning bidder&rsquo;s credit card. This is a fee for using the platform and not a down payment on the listing. The seller and buyer are then digitally &lsquo;introduced&rsquo; to complete the transaction. If the watch is to be shipped, you will be responsible for securely packaging it, but the cost of shipping and insurance will be pay by the seller.</p>
                </CollapsableMenu>
                <CollapsableMenu title={"Can you cancel the auction listing after it&rsquo;s been listed on Zero to 60s?"}>
                    <p>Once the highest bid has been accepted on an auction, the auction listing will be moved to our &lsquo;Sold&rsquo; section, where the highest bid, end date of the auction, all photos and the description will be displayed.</p>
                    <p>The bids and comments made on the auction while it was live will be removed. If an auction did not meet reserve, the listing will be removed from the website but can still be accessed through old links and Google searches. We do not remove an auction listing, but if we were to, it would be done at Zeroto60s own discretion.</p>
                </CollapsableMenu>
                <CollapsableMenu title={"What happens if there are no bids above my reserve price?"}>
                    <p>If the auction fails to meet its reserve price, then the seller will be notified of the highest bid submitted during the auction. The seller will then have 24 hours from the end of the auction to either accept or reject this bid. This 24-hour period can be extended by agreement between us and the buyer.</p>
                    <p>If there is no agreement to extend and the buyer is not notified of the acceptance of their final bid within 24 hours from the end of the auction, it will be deemed to be rejected. If the bid is accepted by the seller, we will put the buyer in touch with the seller for the sale of the auction.</p>
                    <p>If the highest bid after the auction is rejected by the seller, then we will offer the seller the option of listing the auction lot in our &lsquo;Buy Now&rsquo; section. This allows the possibility of a post- auction deal.</p>
                    <p>Please note that Zeroto60s, at our own discretion, has the right to make up the difference between the highest bid and the reserve if the highest bid does not meet the reserve.</p> 
                    <p>If the auction does not sell when the auction period is finished, the auction lot will continue being listed on the site for 30 days in our 30 days section. In this section, the watch can be purchased for the price listed (buyer&rsquo;s premium included) via the &lsquo;Final Offer&rsquo; button to the seller, who can choose to accept or counter until a price is agreed.</p>
                </CollapsableMenu>
                <CollapsableMenu title={"What is the 'One Day' auction?"}>
                    <p>This is a 24 hours auction, where Zeroto60s will work with seller to set the reserve to ensure the listing will be sold. Zeroto60s will commit to purchase the listing at the agreed upon amount, this will ensure seller's to receive their net proceed within days.</p>
                </CollapsableMenu>
                <CollapsableMenu title={"Can I discuss a consignment with you without signing up?"}>
                    <p>If you have a consignment to discuss, but you are not ready to sign up with an account, please contact us now.</p> 
                </CollapsableMenu>
            </div>
            
        </>
    )
}
export default FAQ